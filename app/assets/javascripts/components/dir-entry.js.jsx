class DirEntry extends React.Component {
  render() {
    return (
      <li>
        <span className="glyphicon glyphicon-folder-close"></span>
        {this.props.title}
      </li>
    )
  }
}
