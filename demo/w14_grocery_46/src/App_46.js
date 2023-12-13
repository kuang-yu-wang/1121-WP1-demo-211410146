import {useState, useEffect } from 'react';
import Alert_46 from './Alert_46';
import List_46 from './List_46';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list){
    return JSON.parse(localStorage.getItem(list));
  }
  return [];
}

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
}

const defaultList = JSON.parse(localStorage.getItem('list') || []);

const App_46 = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState(defaultList);
  const [alert, setAlert] = useState({
    show:false,
    msg:'', 
    type:''
  });

  useEffect(()=> {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  const showAlert = (show=false, msg='', type='') => {
    setAlert({show, msg, type});
  }
  
  const clearList = () => {
    showAlert(true, 'empty list', 'danger');
    setList([]);
    setLocalStorage([]);
  };
  const removeItem = (id) => {
    const newItem = list.filter((item) => item.id != id);
    setList(newItem);
    setLocalStorage(list);
    showAlert(true, 'Item has been removed.', 'danger');
  };
  const editItem = (id, name) => {
    const currentItem = list.filter((item) => item.id == id);
    currentItem.name = name;
    setList(currentItem);
    setLocalStorage(list);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name){
      showAlert(true, 'please enter value', 'danger');
    } else {
      showAlert(true, 'item added to the list', 'success');
      const newItem = {
        id: new Date().getTime().toString(),
        title: name
      };
      const newList = [...list, newItem];
      setList(newList);
      setLocalStorage(newList);
      setName('');
    }

  }
  return (
    <>
      <section className="section-center">
        <form
          className="grocery-form"
          onSubmit={handleSubmit}
        >
          <h3>grocery bud -- Marx Wang</h3>
          {alert.show && 
            <Alert_46 {...alert} removeAlert={showAlert} />}
          {/* form */}
          <div className="form-control">
            <input
              type="text" 
              className="grocery" 
              placeholder="e.g. eggs" 
              value={name} onChange={(e)=>setName(e.target.value)} 
            />
            <button type="submit" className="submit-btn">
              submit
            </button>
          </div>
          {/* end form */}
        </form>
        {/* list */}
        {list.length > 0 &&
          <div className='grocery-container'>
            <List_46 items={list} removeItem={removeItem}/>
            <button className="clear-btn" onClick={clearList}>
              clear items
            </button>
          </div>
        }
      </section>
    </>
  );
};
export default App_46;
