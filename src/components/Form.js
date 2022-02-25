import React from 'react'

function Form(props) {

      

  return (


    <form onSubmit={props.handleSubmit}>
        <div>
        <input
                placeholder='First Name'
                name='firstName'
                onChange={props.handleClick}
        />
         <input
                placeholder='Last Name'
                name='lastName'
                onChange={props.handleClick}
        />
         <input
                placeholder='Email'
                name='email'
                onChange={props.handleClick}
        />
         <input
                placeholder='Address'
                name='address'
                onChange={props.handleClick}
        />
         <input
                type="checkbox"
                placeholder='Address'
                name='checkbox'
                onChange={props.handleClick}
        />
        <button> Submit </button>
    </div>
        

    </form>
  )
}

export default Form