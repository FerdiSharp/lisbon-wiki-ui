export default function PersonelButton({text,onClick}) {
    console.log('PersonelButton rendered:'+text)
    return (
        <>
            <button onClick={onClick} className="btn btn-primary">Login</button>
        </>
    )
}