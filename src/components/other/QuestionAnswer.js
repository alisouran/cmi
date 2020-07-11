import React, { Fragment, useState } from 'react'
import { Grid, Button, TextareaAutosize } from '@material-ui/core'

const QuestionAnswer = () => {
    const [question, setQuestion] = useState('')
    const sendRequest = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                question: question,
            }),
        }
        fetch('https://cmisfahan.ir/api/question/', requestOptions).then(
            (response) => {
                console.log(response)
                if (response.status === 200) {
                    alert('سوالتون با موفقیت ارسال شد!')
                    window.location.replace(window.location.origin)
                } else {
                    alert('احتمالا مشکلی هست، لطفا دوباره امتحان کنید.')
                }
            }
        )
    }

    const handleFieldChange = (e) => {
        setQuestion(e.target.value)
    }

    return (
        <Fragment>
            <Grid className={['MainContainer'].join(' ')}>
                <h1 className="rtl text-center">
                    سوال خودتون رو از سخنران این هفته بپرسید.
                </h1>
                <textarea
                    value={question}
                    onChange={handleFieldChange}
                    aria-label="minimum height"
                    className="rtl w-100 h-140px"
                    placeholder="سوال خودتون رو بپرسید. :)"
                />
                <Button
                    variant="contained"
                    color="primary"
                    className="qaButton"
                    onClick={sendRequest}
                >
                    ارسال سوال
                </Button>
            </Grid>
        </Fragment>
    )
}
export default QuestionAnswer
