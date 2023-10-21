import SQLite from 'react-native-sqlite-storage'
import { Alert } from 'react-native'

const tableName = 'contacts_tbl'
const createTableQuery = `CREATE TABLE IF NOT EXISTS ${tableName} (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR, phoneNumber VARCHAR, landlineNumber VARCHAR, profilePhotoUrl VARCHAR, isFavorite BOOLEAN)`
const insertQuery = `INSERT INTO ${tableName} (name, phoneNumber, landlineNumber, profilePhotoUrl, isFavorite) VALUES (?, ?, ?, ?, ?)`
const listAllContactsQuery = `SELECT * FROM ${tableName}`
const deleteQuery = `DELETE FROM ${tableName} WHERE id = ?`
const updateQuery = `UPDATE ${tableName} SET name = ?, phoneNumber = ?, landlineNumber = ?, profilePhotoUrl = ?, isFavorite = ? WHERE id = ?`
const findByIdQuery = `SELECT * FROM ${tableName} WHERE id = ?`
const listContactsBySearchedNameQuery = `SELECT * FROM ${tableName} WHERE name like ? ORDER BY name ASC`
const listAllFavoriteContactsQuery = `SELECT * FROM ${tableName} WHERE isFavorite like ? ORDER BY name ASC`
const findByNameQuery = `SELECT * FROM ${tableName} WHERE name = ?`

//database connection
const db = SQLite.openDatabase(
  {
    name: 'mydb',
    location: 'default',
  },
  () => {
    console.log('Database connected!')
  }, //on success
  (error) => console.log('Database error', error) //on error
)

var ExecuteQuery = (sql, params = []) =>
  new Promise((resolve, reject) => {
    db.transaction((trans) => {
      trans.executeSql(
        sql,
        params,
        (trans, results) => {
          // console.log('result form executeQuery', results)
          resolve(results)
        },
        (error) => {
          reject(error)
        }
      )
    })
  })

//create table function
const createContactsTable = () => {
  db.executeSql(
    createTableQuery,
    [],
    (result) => {
      console.log('Table created successfully', result)
    },
    (error) => {
      console.log('Create table error', error)
    }
  )
}

//insert a new contact record
const createNewContact = (data) => {
  let sql = insertQuery
  let params = [
    data.name,
    data.phoneNumber,
    data.landlineNumber,
    data.profilePhotoStorageUrl,
    data.isFavorite,
  ]
  db.executeSql(
    sql,
    params,
    (result) => {
      Alert.alert('Success', 'Contact created successfully.', result)
    },
    (error) => {
      console.log('Error Creating New Contact', error)
      Alert.alert(
        'Error',
        'Failed to create New Contact. Please check the logs for details.'
      )
    }
  )
}

//list all the contacts
const listAllContacts = async () => {
  return new Promise((resolve, reject) => {
    let sql = listAllContactsQuery

    db.transaction((tx) => {
      tx.executeSql(
        sql,
        [],
        (tx, results) => {
          var len = results.rows.length
          var contacts = []
          if (len > 0) {
            for (let i = 0; i < len; i++) {
              contacts.push(results.rows.item(i))
            }
            resolve(contacts)
          } else {
            reject('No user found')
          }
        },
        (error) => {
          reject('List user error: ' + error)
        }
      )
    })
  })
}

//update user record
const updateContact = async (data) => {
  let sql = updateQuery
  let params = [
    data.name,
    data.phoneNumber,
    data.landlineNumber,
    data.profilePhotoStorageUrl,
    data.isFavorite,
    data.id,
  ]

  const result = await ExecuteQuery(sql, params)
  return result
}

//delete user record
const deleteContact = async (id) => {
  let sql = deleteQuery
  let params = [id]

  const result = await ExecuteQuery(sql, params)
  // db.executeSql(
  //   sql,
  //   params,
  //   (resultSet) => {
  //     Alert.alert('Success', 'User deleted successfully')
  //   },
  //   (error) => {
  //     console.log('Delete user error', error)
  //   }
  // )

  return result
}

//find contact by id
const findContactById = async (id) => {
  let sql = findByIdQuery
  let params = [id]

  const result = await ExecuteQuery(sql, params)
  return result
}

const listContactsBySearchedName = async (name) => {
  let sql = listContactsBySearchedNameQuery
  let params = [`%${name}%`]

  const result = await ExecuteQuery(sql, params)
  var len = result.rows.length
  var contacts = []
  if (len > 0) {
    for (let i = 0; i < len; i++) {
      contacts.push(result.rows.item(i))
    }
  }
  return contacts
}
const listAllFavoriteContacts = async () => {
  let sql = listAllFavoriteContactsQuery
  let params = [true]

  const result = await ExecuteQuery(sql, params)
  var len = result.rows.length
  var contacts = []
  if (len > 0) {
    for (let i = 0; i < len; i++) {
      contacts.push(result.rows.item(i))
    }
  }
  return contacts
}

export {
  createContactsTable,
  createNewContact,
  listAllContacts,
  updateContact,
  deleteContact,
  findContactById,
  listContactsBySearchedName,
  listAllFavoriteContacts,
}
