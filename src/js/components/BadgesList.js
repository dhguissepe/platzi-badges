import React from 'react'
import { Link } from 'react-router-dom'
import BadgeListItem from './BadgeListItem.js'


function useSearchBadges(badges, searchFilterValue) {
  const [filteredBadges, setFilteredBadges] = React.useState(badges)

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `
      ${badge.firstName}
      ${badge.lastName}
      ${badge.twitter}
      ${badge.jobTitle}
      ${badge.email}`
        .toLowerCase()
        .includes(searchFilterValue.toLowerCase())
    })

    setFilteredBadges(result)

    }, [badges, searchFilterValue])

  return filteredBadges
}

function BadgesList(props) {
  const badges = props.badges

  const filteredBadges = useSearchBadges(badges, props.searchFilterValue)

  if ( filteredBadges.length === 0 ) {
    return (
      <div className="container text-center">
        <p className="m-4 p-4">Not badges found</p>
        <Link className="btn btn-primary"to="/badges/new" >Add new badge</Link>
      </div>
    )
  }

  return(
    <React.Fragment>
      {filteredBadges.map((badge) => {
        return (
          <Link
            to={`/badges/${badge.id}`}
            className="text-reset text-decoration-none col-4 pl-2 pr-2 pt-0 pb-0"
            key={badge.id}
          >
            <BadgeListItem badge={badge}/>
          </Link>
        )
      })}
    </React.Fragment>
  )
}

export default BadgesList