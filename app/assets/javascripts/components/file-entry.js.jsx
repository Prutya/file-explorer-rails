class FileEntry extends React.Component {
  render() {
    return (
      <li className="">
        <span className="glyphicon glyphicon-file"></span>
        {this.props.title}
      </li>
    )
  }
}
