function Services(){
    return(
        <>
        <div className="container-xl">
  <div className="table-responsive">
    <div className="table-wrapper">
      <div className="table-title">
        <div className="row">
          <div className="col-sm-5">
            <h2>Service <b>Management</b></h2>
          </div>
          <div className="col-sm-7">
            <a href="#" className="btn btn-secondary"><i className="material-icons"></i> <span>Add New Service</span></a>
          </div>
        </div>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>STT</th>
            <th>Service</th>
            <th>Usable area</th>
            <th>Costs</th>
            <th>Max people</th>
            <th>Type</th>
            <th>Standard</th>
            <th>Description</th>
            <th>Pool</th>
            <th>Floor</th>
            <th>Free </th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><a href="#"> Michael Holz</a></td>
            <td>04/10/1999</td>
            <td>Male</td>
            <td>44434343</td>
            <td>34342424124</td>
            <td>abc@gmail.com</td>
            <td>Diamond</td>
            <td>England</td>
            <td>England</td>
            <td>England</td>
            <td>
              <a href="#" className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons"></i></a>
              <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td> Michael</td>
            <td>04/10/1999</td>
            <td>FeMale</td>
            <td>767676</td>
            <td>8787878</td>
            <td>abc@gmail.com</td>
            <td>Diamond</td>
            <td>England</td>
            <td>England</td>
            <td>England</td>
            <td>
              <a href="#" className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons"></i></a>
              <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="clearfix">
        <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
        <ul className="pagination">
          <li className="page-item disabled"><a href="#">Previous</a></li>
          <li className="page-item"><a href="#" className="page-link">1</a></li>
          <li className="page-item"><a href="#" className="page-link">2</a></li>
          <li className="page-item active"><a href="#" className="page-link">3</a></li>
          <li className="page-item"><a href="#" className="page-link">4</a></li>
          <li className="page-item"><a href="#" className="page-link">5</a></li>
          <li className="page-item"><a href="#" className="page-link">Next</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
        </>
    )
}
export default Services;