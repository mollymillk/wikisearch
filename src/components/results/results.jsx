import './results.css'
import { ShowResults } from './ShowResults';
import { getPart } from './getPart';

export default function Results(props) {
    if (props.value !== '') {
            let nextPartOfNumbers = getPart(props.pageNumber, props.items) 
            return (
                <ShowResults defaultItems = {nextPartOfNumbers}/>
            )}}
