export default function Address(props) {
    const { street, city, state, zip } = props;
    return (
        <>
            <h3>Hard coded address</h3>
            <p>street-111 harrison
                city-Brooklyn
                state-New york
                zip-11206</p>
            <h3>Not Hard coded address</h3>
            <p>street-{street} city-{city} state-{state} zip-{zip}</p>
        </>
    )
}
