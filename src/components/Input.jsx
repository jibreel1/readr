const Input = () => {
   return (
      <div className="input">
         <input
            type="text"
            placeholder="Type something..."
            //    onChange={e => setText(e.target.value)}
            //    value={text}
         />
         <button>Send</button>
      </div>
   );
};

export default Input;
