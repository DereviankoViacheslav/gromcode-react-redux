import { connect } from 'react-redux';
import { availableOptionsSelector } from './options.selectors';
import { toggleOption } from './options.actions';

import Options from './Options';

function mapStateToProps(state) {
  return {
    options: availableOptionsSelector(state),
  };
}

const mapDispatchToProps = {
  moveOption: toggleOption
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);