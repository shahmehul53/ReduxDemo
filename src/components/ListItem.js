import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  LayoutAnimation,
} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from './common/CardSection';
import * as actions from '../actions';

// const ListItem = ({test}) => {
//   console.log('testactions', actions);
//   const {titleStyle} = styles;
//   const {title} = test.item;
//   return (
//     <TouchableWithoutFeedback onPress={() => actions.selectLibrary(test.item.id)}>
//       <View>
//         <CardSection>
//           <Text style={titleStyle}>{title}</Text>
//         </CardSection>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    if (this.props.test.item.id === this.props.selectedLibraryId) {
      return (
        <CardSection>
          <Text style={{flex: 1}}>{this.props.test.item.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const {titleStyle} = styles;
    const {id, title} = this.props.test.item;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {selectedLibraryId: state.selectedLibraryId};
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

export default connect(
  mapStateToProps,
  actions,
)(ListItem);
