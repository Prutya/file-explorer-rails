class DirEntry extends React.Component {
  render() {
    return (
      <li className="list-group-item">
        <span className="glyphicon glyphicon-folder-close"></span>
        <span className="margin-left-sm">{this.props.title}</span>
      </li>
    )
  }
}
