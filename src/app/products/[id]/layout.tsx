export default function ProductLayout({
    //layouts are very convenient because only the components rerender and they dont rerender on page load S
    children,
}:{children:React.ReactNode;}){

    return(
        <>
        <h2>This Featured Products Section Will Only Apply in products section</h2>
        {children}
        </>
    )

}