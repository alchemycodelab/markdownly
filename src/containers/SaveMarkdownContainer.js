import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SaveMarkdown from '../components/markdown/SaveMarkdown';

import { sendTabName, sendTitleSearch, updateCurrentIndex, newHistory, switchBody } from '../actions/documentActions';
import { getTabName, getHistoryArray, getTitleSearch } from '../selectors/documentSelectors';



export default function SaveMarkdownContainer() {

  const tabName = useSelector(state => getTabName(state));
  const historyArray = useSelector(state =>  getHistoryArray(state));
  const titleSearch = useSelector(state => getTitleSearch(state));


  const dispatch = useDispatch();
  const handleChange = ({ target }) => {
    if(target.name === 'add') dispatch(sendTabName(target.value));
    else dispatch(sendTitleSearch(target.value));
  };
  const handleAdd = (name, historyArray) => {
    let newName = name;
    if(historyArray.length > 0) {
      for(let i = 0; i < historyArray.length; i++) {
        if(name === historyArray[i].name) {
          newName = `${name}-copy`; 
        }
      }
    }
    dispatch(updateCurrentIndex(historyArray.length));
    dispatch(switchBody('', historyArray.length));
    dispatch(newHistory(newName, ''));
    localStorage.setItem('history', JSON.stringify(historyArray));
  };
  

  return (
    <SaveMarkdown 
      handleAdd={handleAdd} 
      handleChange={handleChange} 
      tabName={tabName} 
      titleSearch={titleSearch}
      historyArray={historyArray}
    />
  );
}


// const SaveMarkdownContainer = ({ handleAdd, handleChange, tabName, titleSearch, historyArray }) => {
//   return (
//     <SaveMarkdown 
//       handleAdd={handleAdd} 
//       handleChange={handleChange} 
//       tabName={tabName} 
//       titleSearch={titleSearch}
//       historyArray={historyArray}
//     />
//   );
// };

// SaveMarkdownContainer.propTypes = {
//   handleAdd: PropTypes.func.isRequired,
//   handleChange: PropTypes.func.isRequired,
//   tabName: PropTypes.string.isRequired,
//   titleSearch: PropTypes.string,
//   historyArray: PropTypes.array.isRequired
// };



// const mapStateToProps = (state) => ({
//   tabName: getTabName(state),
//   historyArray: getHistoryArray(state),
//   titleSearch: getTitleSearch(state)
// });

// const mapDispatchToProps = dispatch => ({
//   handleChange({ target }) {
//     if(target.name === 'add') dispatch(sendTabName(target.value));
//     else dispatch(sendTitleSearch(target.value));
//   },
//   handleAdd(name, historyArray) {
//     let newName = name;
//     if(historyArray.length > 0) {
//       for(let i = 0; i < historyArray.length; i++) {
//         if(name === historyArray[i].name) {
//           newName = `${name}-copy`; 
//         }
//       }
//     }
//     dispatch(updateCurrentIndex(historyArray.length));
//     dispatch(switchBody('', historyArray.length));
//     dispatch(newHistory(newName, ''));
//     localStorage.setItem('history', JSON.stringify(historyArray));
//   },
// });

// const SaveMarkdownContainerContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SaveMarkdownContainer);

// export default SaveMarkdownContainerContainer;


