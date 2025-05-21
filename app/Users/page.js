import Link from "next/link"

const Users = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return (
    <div className="users-list">
      {
        data.map(user => (
          <div key={user.id} className="user-card">
            <Link href={`/Users/${user.id}`}>
              <h2 className="user-name">{user.name}</h2>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Users
