import React, { useContext, useEffect } from 'react'
import { GithubContext } from '../context/github/githubContext'
import { Link } from 'react-router-dom'
import Repos from '../components/Repos'

const Profile = ({ match }) => {
    const { getUser, getRepos, loading, user, repos } = useContext(GithubContext)
    const urlName = match.params.name
    useEffect(() => {
        getUser(urlName)
        getRepos(urlName)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [urlName])

    if (loading) return <p className="text-center">Loading...</p>

    const { name, company, avatar_url,
        location, bio, blog, login, html_url, followers,
        following, public_repos, public_gists } = user

    return (
        <>
            <Link to='/' className='btn btn-link'>to Homepage</Link>
            <div className="card mb-4 ">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img src={avatar_url} alt={name} style={{width: '150px'}} />
                            <h1>{login}</h1>
                            {location && <p>Location: {location}</p>}
                        </div>
                        <div className="col">
                            {bio && <> <h3>Bio</h3><p>{bio}</p></>}
                            <a href={html_url} target='_blank' rel="noopener noreferrer" className='btn btn-dark'>Open profile on GitHub</a>
                            <ul>
                                {name && <li><strong>Name: </strong>{name}</li>}
                                {company && <li><strong>Company: </strong>{company}</li>}
                                {blog && <li><strong>Blog page: </strong>{blog}</li>}
                            </ul>
                            <div className="badge badge-primary">Followers: {followers}</div>&nbsp;
                            <div className="badge badge-success">Following: {following}</div>&nbsp;
                            <div className="badge badge-info">Repos: {public_repos}</div>&nbsp;
                            <div className="badge badge-dark">Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>
            <h2>Repositories</h2>
            <Repos repos={repos}/>
        </>
    )
}

export default Profile