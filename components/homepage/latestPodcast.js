import Link from 'next/link'
import React from 'react'

const LatestPodcast = ({
    title,
    items = []
}) => {

    return (
        <>
            <span className="cat-box">
                <span className="cat-tags">{title}</span>
            </span>

            for (const items in items) {
                <PodcastItems />
              }
        </>

    )
}

export default LatestPodcast

const PodcastItems = ({
    id,
    catTitle
}) => {

    return (
        <div className="item-news media">
            <Link href={`/podcastDetail/${id}`}>
                <a title="Temporary">
                    <figure className="mr-3">
                        <img src="https://picsum.photos/150/150?random" alt="Temporary" />
                    </figure>
                    <span className="media-body">
                        <span className="main-title">"Temporary"</span>
                        <span className="start-time"> Mar 20, 2018</span>
                    </span>
                </a>
            </Link>
        </div>
    )
}