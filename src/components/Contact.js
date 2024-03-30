const Contact = () => {
  return(
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl m-4">
        Contact Us
      </h1>
      <form className="flex flex-col">
        <label>Name</label>
        <input className="border border-black p-2 m-2" type="text" />
        <label>Email</label>
        <input className="border border-black p-2 m-2" type="text" />
        <label>Mobile</label>
        <input className="border border-black p-2 m-2" type="text" />
        <label>Message</label>
        <input className="border border-black p-2 m-2" type="text" />
        <button className="border-2 border-black p-2 m-2 rounded-xl">Submit</button>
      </form>
    </div>
  )
}

export default Contact