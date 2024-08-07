export default function TotalRepay({yearRepay}){
    return(
        <div>
            <p>Total you will pay over the term </p>
            {yearRepay > 0 && <p style={{fontSize:"40px", color:"hsl(59, 56%, 62%)"}}>{yearRepay}</p>}
        </div>
    )
}