import React, { useEffect, useState } from 'react'

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import { FileDropSection, Avatar } from '../commonPages'

function FormComponent(props) {
    const { onClickSubmit } = props
    const [file, setFile] = useState()
    const [uri, setUri] = useState('')
    const [dateTime, setDateTime] = useState(new Date())
    const [properties, setProperties] = useState([{ key: '', value: '' }])

    useEffect(() => {
        if (properties && properties.length) {
            const { key, value } = properties[properties.length - 1]
            if (key !== '' && value !== '') {
                setProperties([ ...properties, { key: '', value: '' }])
            }
        }
    }, [properties])

    const handleOnSelectFile = ({ file }) => {
    const uri = file && file.type && file.type.split('/')[1] === 'pdf' ? file.path : file.preview
        setUri(uri)
        setFile(file)
    }

    const onChangeDate = dateTime => setDateTime(dateTime)
    const onChangePropertiesKey = (index, key) => console.log('index==========', key, index)
    const onChangePropertiesValue = (index, value) => console.log('index==========', value, index)

    console.log('properties===========', properties)

    let propertiesSection = null
    if (properties && properties.length) {
        propertiesSection = properties.map(({ key, value }, index) => {
            return (
                <div class="row">
                    <div class="col-sm-6">
                        <input type="text" class="form-control" placeholder="e.g. size" value={key} onChange={() => onChangePropertiesKey(index, key)} />
                    </div>
                    <div class="col-sm-6 mt-2 mt-sm-0">
                        <input type="text" class="form-control" placeholder="e.g. M, L, XL" value={value} onChange={() => onChangePropertiesValue(index, value)} />
                    </div>
                </div>
            )
        })
    }

    return (
        <div class="content-body">
            <div class="container-fluid">
                {/* Page titled start */}
                <div class="page-titles">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active"><a href="javascript:void(0)">Create Collection</a></li>
                    </ol>
                </div>
                {/* Page titled end */}
                <div class="row">
                    <div class="col-xl-6 col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                {/* <button type="submit" class="btn btn-info">Choose File</button>
                                <input type="text" readonly class="form-control-plaintext" value="PNG, GIF, WEBP, MP4 or MP3. MAX 30mb" /> */}
                                <div>
                                    <FileDropSection name="Choose File" formatText="PNG, GIF, JPG" selectedFile={handleOnSelectFile} />
                                </div>

                                <br />
                                <label><b>Name</b></label>
                                <input type="text" class="form-control" placeholder="e.g. redeemable card with logo" />

                                <br />
                                <label><b>Description</b> (Optional)</label>
                                <textarea class="form-control" placeholder="e.g. after purchasing you will able to real cards"></textarea>

                                <br />
                                <label><b>Royalities</b></label>
                                <input type="text" class="form-control" placeholder="e.g. 10%, 20%, 30%" />

                                <br />
                                <label><b>Properties (Optional)</b></label>
                                {propertiesSection}

                                <br />
                                <label><b>Date and Time</b></label>  
                                <div style={{ flex: 1 }}>
                                    <DatePicker placeholderText="Date and time" dateFormat="Pp" className="form-control" selected={dateTime} showTimeSelect onChange={onChangeDate} />
                                </div>                              

                                <br />
                                <label><b>Starting Price</b></label>
                                <input type="text" class="form-control" placeholder="e.g. Price" id="mdate" />

                                <br />
                                <label><b>Minimum Price</b></label>
                                <input type="text" class="form-control" placeholder="e.g. Price" id="mdate" />

                                <br />
                                <label><b>Reserve Price</b></label>
                                <input type="text" class="form-control" placeholder="e.g. Price" id="mdate" />

                                <br />
                                <button type="submit" class="btn btn-success col-md-6" onClick={onClickSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Preview section of file start */}
                    <div class="col-xl-6 col-lg-12" style={{ height: "400px" }}>
                        <label><b>Preview</b></label>
                        <div class="card" style={{ alignItems: 'center', justifyContent: 'center' }}>
                            {/* <label>Prevlew of collection</label> */}
                            {uri ? <Avatar uri={uri} style={{ height: '300px', width: '300px' }} /> : <label>Prevlew of collection</label>}
                        </div>
                    </div>
                    {/* Preview section of file end */}
                </div>

            </div>
        </div>
    )
}

export default FormComponent
