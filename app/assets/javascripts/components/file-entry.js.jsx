class FileEntry extends React.Component {
  render() {
    return (
      <li className="list-group-item">
        <span className="glyphicon glyphicon-file"></span>
        <span className="margin-left-sm">{this.props.title}</span>
        <span className="pull-right text-muted">{this.props.size} B</span>
      </li>
    )
  }
}
