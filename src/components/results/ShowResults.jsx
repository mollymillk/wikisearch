import { Link } from "@mui/material";

export const ShowResults = (props) => {
    return (
        <div className="all_results">
            {props.defaultItems &&
                props.defaultItems.map(item => {
                    const url = `https://en.wikipedia.org/?curid=${item.pageid}`
                    return (
                        <div className="result_container">
                            <h3>
                                {item.title + ''}
                            </h3>
                            <Link 
                            href={url}
                            underline="hover"
                            >
                            Read more
                            </Link>
                            <p dangerouslySetInnerHTML={{__html:
                            item.snippet}}></p>
                            <hr 
                            align="center" 
                            width='700' 
                            color='#628096'
                            size='1'
                            >
                            </hr>
                        </div>
                )})}
        </div>
    )
}