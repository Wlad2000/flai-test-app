import React from 'react'
/**  Returns jsx list element
 * 
 * 
 * 
 */

const List = (props) => {
    return (
        <div style={{
            display: 'flex'
        }}>
            <div style={{
                display: 'flex', background: `${props.dev && '#212124'}`, columnGap: '15px', padding: '8px'
            }}>
                {props.listItem && < svg width="20" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 0V9.5C0.5 15.0228 4.97715 19.5 10.5 19.5H15" stroke="white" stroke-opacity="0.25" />
                </svg>}
                <div style={{ display: 'flex', width: '20px', height: '20px', border: '1px solid gray', alignItems: 'center', justifyContent: "center" }
                } >
                    {
                        props.active ?

                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="10" height="10" fill="#D1FD0A" />
                            </svg>
                            : props.list ?
                                <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="10" height="2" fill="#D1FD0A" />
                                </svg>
                                :
                                ''
                    }
                </div >
                <p style={{ fontWeight: '600', fontSize: '15px' }}>{props.text}</p>
                {
                    props.dev &&
                    <p style={{ fontWeight: '600', fontSize: '15px', color: '#D1FD0A', columnGap: '6px', display: 'flex' }}>
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.99935 0.332031C6.8834 0.332031 7.73125 0.683221 8.35637 1.30834C8.98149 1.93346 9.33268 2.78131 9.33268 3.66536V5.66536C9.86311 5.66536 10.3718 5.87608 10.7469 6.25115C11.122 6.62622 11.3327 7.13493 11.3327 7.66536V11.6654C11.3327 12.1958 11.122 12.7045 10.7469 13.0796C10.3718 13.4546 9.86311 13.6654 9.33268 13.6654H2.66602C2.13558 13.6654 1.62687 13.4546 1.2518 13.0796C0.876729 12.7045 0.666016 12.1958 0.666016 11.6654V7.66536C0.666016 7.13493 0.876729 6.62622 1.2518 6.25115C1.62687 5.87608 2.13558 5.66536 2.66602 5.66536V3.66536C2.66602 2.78131 3.0172 1.93346 3.64233 1.30834C4.26745 0.683221 5.11529 0.332031 5.99935 0.332031ZM5.99935 8.33203C5.66296 8.33192 5.33897 8.45897 5.09232 8.6877C4.84566 8.91642 4.69458 9.22993 4.66935 9.56536L4.66602 9.66536C4.66602 9.92907 4.74421 10.1869 4.89072 10.4061C5.03723 10.6254 5.24547 10.7963 5.4891 10.8972C5.73274 10.9981 6.00083 11.0245 6.25947 10.9731C6.51811 10.9216 6.75569 10.7946 6.94216 10.6082C7.12863 10.4217 7.25562 10.1841 7.30706 9.92548C7.35851 9.66684 7.3321 9.39875 7.23119 9.15512C7.13027 8.91148 6.95937 8.70325 6.74011 8.55674C6.52084 8.41023 6.26306 8.33203 5.99935 8.33203ZM5.99935 1.66536C5.46892 1.66536 4.96021 1.87608 4.58513 2.25115C4.21006 2.62622 3.99935 3.13493 3.99935 3.66536V5.66536H7.99935V3.66536C7.99935 3.13493 7.78864 2.62622 7.41356 2.25115C7.03849 1.87608 6.52978 1.66536 5.99935 1.66536Z" fill="#D1FD0A" />
                        </svg>
                        Coming Soon
                    </p>
                }
            </div >
        </div >

    )
}

export default List