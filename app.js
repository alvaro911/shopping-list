$(document).ready(()=>{
  const state={
    items:[]
  }

  for(var i =0; i<$('.shopping-list').children().length; i++){
    state.items.push($('.shopping-list').children()[i]);
  }

  function addItem(state, item){
    return state.items.push(item);
  }

  function addLi(item){
    return item.append(`<li>
        <span class="shopping-item">${state.items[state.items.length-1]}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
    );
  }

  $('#js-shopping-list-form').on('submit', (e)=>{
    e.preventDefault();
    $('#shopping-list-entry').html(' ');
    addItem(state, $('#shopping-list-entry').val());
    addLi($('ul'));
  })

  function checked(elem){
    // debugger
    return elem.closest('div').prev().toggleClass('shopping-item__checked')
    // console.log(elem.closest('div').prev());
  }

  $('body').on('click', '.shopping-item-toggle',(e)=>{
    const element = $(e.currentTarget)
    e.preventDefault()
    checked(element)
  })

  function deleteItem(elem){
    return elem.closest('li').remove()
  }

  $('body').on('click', '.shopping-item-delete', (e)=>{
    const element = $(e.currentTarget)
    e.preventDefault()
    deleteItem(element);
  })
})
