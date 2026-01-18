import React, { useEffect, useState } from 'react'
import Header from './header'
import './usersAndPost.css'
import { Link } from 'react-router'
import fetchHelper from './fetchHelper'

export default function Users() {
    const [users, setUsersList] = useState({ fetchSuccess: true, usersList: null })
    const [loading, setLoading] = useState(false)
    const { fetchSuccess, usersList } = users
    useEffect(() => {
        (async function () {

            try {
                setLoading(true)
                const usersList = await fetchHelper("https://jsonplaceholder.typicode.com/users")
                setUsersList({ usersList, fetchSuccess: true })
            }
            catch (e) {
                setUsersList({ usersList: e.message, fetchSuccess: false })
            }
            finally {
                setLoading(false)
            }
        }())
    }, []);



    return (
        <>
            <div id="users-div">
                <Header headerId="users-header" h1Id="users-h1" h2text="Users" />
                {loading && "loading..."}
                {fetchSuccess ? <ul id='main-users-ul' className='main-ul'> {usersList?.map(user => (
                    (<li key={user.id} className="user-li"><Link to={`/posts/${user.id}`}><ul>
                        <li><span>Name</span>:{user.name}</li>
                        <li><span>Website</span>:{user.website}</li>
                        <li><span>CompanyName</span>:{user.company.name}</li>
                        <li><span>CatchPhrase</span>:{user.company.catchPhrase}</li>
                        <li><span>CompanyBs</span>:{user.company.bs}</li>
                    </ul></Link></li>)
                ))}  </ul> : <p className='error'>oops...something went wrong {usersList}</p>
                }

            </div>
            {/*" https://jsonplaceholder.typicode.com/users"*/}
            {/*<ListComponent url=" usersJson.json"/>*/}
        </>
    )
}
