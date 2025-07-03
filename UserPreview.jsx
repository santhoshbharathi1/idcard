function UserPreview({ data }) {
  return (
    <div className="preview-card">
      <div className="header"></div>
      <div className="content">
        <h3>{data.companyName}</h3>
        <p><em>{data.slogan}</em></p>
         {data.photo && <img src={data.photo} alt="User Upload" className="photo-preview" />}
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Position:</strong> {data.position}</p>
        <p><strong>Mobile:</strong> {data.mobile}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Website:</strong> {data.website}</p>
        <p><strong>Address:</strong> {data.address}</p>
       
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default UserPreview;
