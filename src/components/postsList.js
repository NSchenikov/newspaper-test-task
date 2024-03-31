

export const PostsList = ({posts}) => {
    if(posts && Array.isArray(posts)) {
        let list = posts.map((item, index) => {
            return (
                <div key={index}>
            <li className="comment">
            <div className="comment-header">
              <div>User id: {item.userId}</div>
              <div>Post id: {item.id}
              </div>
            </div>
            <div className="comment-body">
                <div>
                    Title: {item.title}
                </div>
                <br/>
              <div className="comment-text">
                {item.body}
              </div>
            </div>
            <div className="comment-footer"></div>
          </li>
          <br/>
          </div>
            )
        })
    
        return (
            <div>
                {list}
            </div>
        )
    }
}