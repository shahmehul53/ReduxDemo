import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';

// const LibraryList = ({libraries1}) => {
//   console.log(libraries1);
//   const renderItem = library => {
//     return <ListItem test={library} />;
//   };

//   return (
//     <FlatList
//       data={libraries1}
//       //   renderItem={m => {
//       //     console.log(m);
//       //     console.log(m.item);
//       //     return <ListItem test={m} />;
//       //   }}
//       renderItem={renderItem}
//       keyExtractor={library => library.id}
//     />
//   );
// };

class LibraryList extends Component {
  //console.log('props', this.props);
  renderItem(library) {
    return <ListItem test={library} />;
  }
  render() {
    console.log('props', this.props);
    return (
      <FlatList
        data={this.props.libraries}
        // renderItem={m => {
        //   console.log(m);
        //   console.log(m.item);
        //   return <ListItem test={m} />;
        // }}
        renderItem={this.renderItem}
        keyExtractor={library => library.id}
      />
    );
  }
}

const mapStateToProps = state => {
  return {libraries: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);
