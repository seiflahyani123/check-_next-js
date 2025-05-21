const Profil = async ({ params }) => {
  const { id } = params
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()

  return (
    <div className="profile-container">
      <h1 className="profile-username">{data.username}</h1>
      <div className="profile-info">
        <p className="profile-item"><strong>Email:</strong> {data.email}</p>
        <p className="profile-item"><strong>Phone:</strong> {data.phone}</p>
        <p className="profile-item"><strong>Website:</strong> {data.website}</p>
        <p className="profile-item"><strong>City:</strong> {data.address.city}</p>
        <p className="profile-item"><strong>Street:</strong> {data.address.street}</p>
        <p className="profile-item"><strong>Zipcode:</strong> {data.address.zipcode}</p>
      </div>
    </div>
  )
}

export default Profil
