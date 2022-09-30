import * as React from 'react';
import styles from '../../styles/Search.module.css'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'


function SearchAutoComplete() {
    const items = [
        {
            id: 0,
            name: 'Cobol'
        },
        {
            id: 1,
            name: 'JavaScript'
        },]


    const handleOnSearch = (string, results) => {

        console.log(string, results)
    }

    const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
    }

    const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }
    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
            </>
        )
    }


    return (
        <div>
            <header className="h-full w-full">
                <div>
                    <ReactSearchAutocomplete
                        placeholder='Where are you going ?'
                        styling={
                            {
                                backgroundColor: "none",
                                color: "white",
                                placeholderColor: "silver",
                                hoverBackgroundColor: "none",
                            }
                        }
                        items={items}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        autoFocus
                        formatResult={formatResult}
                    />
                </div>
            </header>
        </div>
    )
}

export default SearchAutoComplete