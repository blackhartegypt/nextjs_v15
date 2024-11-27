

export default  async function Products({params}:{params:{id:string}}){

    const {id} =await params;
    return(
        <>
        <h2>Product is {id}</h2>
            <p>Since page recieves route parameters as a prop we can destructure them and set type of the id as string</p>
            <p>since dynamic api like params has been made asynchronous we can make the function async and await the results from params</p>
        </>
        
        
    )
}