import React, { useEffect, useState } from 'react'

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import { Avatar, Button, EditorComponent, FileDropSection, Text } from '../commonPages'
import { validation } from './formUtility'

function FormComponent(props) {
    const { isLoading, isFileUploadLoading, uploadedFile, onSelectFile, onClickFormSubmit } = props
    const [dateTime, setDateTime] = useState(new Date())
    const [properties, setProperties] = useState([{ Key: '', Value: '' }])
    const [formInfo, setFormInfo] = useState({ name: undefined, royalties: '5', dateTime: new Date(), startingPrice: undefined, minimumPrice: undefined, reservePrice: undefined })
    const [validationMessage, setValidationMessage] = useState({})
    const [editorValue, setEditorValue] = useState(null)

    const { imageUrl, name, royalties, startingPrice, minimumPrice, reservePrice } = formInfo || {}
    const {
        fileValidationMessage,
        nameValidationMessage,
        sellerFeeValidationMessage,
        dateTimeValidationMessage,
        startingPriceValidationMessage,
        minimumPriceValidationMessage,
        reservePriceValidationMessage
    } = validationMessage || {}

    useEffect(() => {
        if (properties && properties.length) {
            const { Key, Value } = properties[properties.length - 1]
            if (Key !== '' && Value !== '') {
                setProperties([ ...properties, { Key: '', Value: '' }])
            }

            handleOnChange({ properties })
        }
    }, [properties])

    useEffect(() => {
        handleOnChange({ imageUrl: uploadedFile || undefined })
    }, [uploadedFile])

    const onClickSubmit = () => {
        const { status, formValidationMessage } = validation(formInfo)
        setValidationMessage(formValidationMessage)
        if (status) {
            onClickFormSubmit({ ...formInfo, description: editorValue || '' })
        }
    }

    const handleOnSelectFile = ({ file }) => onSelectFile(file)

    const onChangeDate = dateTime => {
        handleOnChange({ dateTime })
        setDateTime(dateTime)
    }

    const onChangePropertiesKey = (index, Key) => {
        const tempArray = properties
        tempArray[index].Key = Key
        setProperties([...tempArray])
    }

    const onChangePropertiesValue = (index, Value) => {
        const tempArray = properties
        tempArray[index].Value = Value
        setProperties([...tempArray])
    }

    const handleOnChange = info => {
        setFormInfo({ ...formInfo, ...info })
    }

    // console.log('formInfo==================', formInfo)

    let propertiesSection = null
    if (properties && properties.length) {
        propertiesSection = properties.map(({ Key, Value }, index) => {
            return (
                <>
                    {index !== 0 ? <br /> : null}
                    <div class="row">
                        <div class="col-sm-6">
                            <input type="text" class="form-control" placeholder="e.g. size" value={Key} onChange={e => onChangePropertiesKey(index, e.target.value)} />
                        </div>
                        <div class="col-sm-6 mt-2 mt-sm-0">
                            <input type="text" class="form-control" placeholder="e.g. M, L, XL" value={Value} onChange={e => onChangePropertiesValue(index, e.target.value)} />
                        </div>
                    </div>
                </>
            )
        })
    }

    let buttonSection = null
    if (isLoading) {
        buttonSection = <Button isLoading={isLoading} />  
    } else {
        buttonSection = <Button label="Submit" onClick={onClickSubmit} />
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
                                <div>
                                    <FileDropSection name="Choose File" formatText="PNG, GIF, JPG" selectedFile={handleOnSelectFile} isLoading={isFileUploadLoading} />
                                </div>
                                {fileValidationMessage ? (
                                    <>
                                        <lable className='validation-label'>{fileValidationMessage}</lable>
                                        <br />
                                    </>
                                 ) : null}
                                
                                <br />
                                <label><b>Name</b></label>
                                <input type="text" class="form-control" placeholder="e.g. redeemable card with logo" value={name} onChange={e => handleOnChange({ name: e.target.value })} />
                                {nameValidationMessage ? (
                                    <>
                                        <lable className='validation-label'>{nameValidationMessage}</lable>
                                        <br />
                                    </>
                                ) : null}

                                <br />
                                <label><b>Description</b> (Optional)</label>
                                <EditorComponent onChange={info => setEditorValue(info)} value={editorValue || ''} />

                                <br />
                                <label><b>Seller Fee (%)</b></label>
                                <input type="text" readOnly class="form-control" placeholder="e.g. 5%" value={royalties} />
                                {sellerFeeValidationMessage ? (
                                    <>
                                        <lable className='validation-label'>{sellerFeeValidationMessage}</lable>
                                        <br />
                                    </>
                                ) : null}
                                
                                <br />
                                <label><b>Properties (Optional)</b></label>
                                {propertiesSection}

                                <br />
                                <label><b>Date and Time</b></label>  
                                <div style={{ flex: 1 }}>
                                    <DatePicker placeholderText="Date and time" dateFormat="Pp" className="form-control" selected={dateTime} showTimeSelect onChange={onChangeDate} />
                                </div>
                                {dateTimeValidationMessage ? (
                                    <>
                                        <lable className='validation-label'>{dateTimeValidationMessage}</lable>
                                        <br />
                                    </>
                                ) : null}                           
                                
                                <br />
                                <label><b>Starting Price</b></label>
                                <Text.NumberInput
                                    class="form-control"
                                    placeholder="e.g. 10"
                                    value={startingPrice}
                                    onChange={e => handleOnChange({ startingPrice: e.target.value })}
                                    maxLength={10}
                                />
                                {startingPriceValidationMessage ? (
                                    <>
                                        <lable className='validation-label'>{startingPriceValidationMessage}</lable>
                                        <br />
                                    </>
                                ) : null}
                                
                                <br />
                                <label><b>Minimum Price</b></label>
                                <Text.NumberInput
                                    class="form-control"
                                    placeholder="e.g. 10"
                                    value={minimumPrice}
                                    onChange={e => handleOnChange({ minimumPrice: e.target.value })}
                                    maxLength={10}
                                />
                                {minimumPriceValidationMessage ? (
                                    <>
                                        <lable className='validation-label'>{minimumPriceValidationMessage}</lable>
                                        <br />
                                    </>
                                ) : null}
                                
                                <br />
                                <label><b>Reserve Price</b></label>
                                <Text.NumberInput
                                    class="form-control"
                                    placeholder="e.g. 10"
                                    value={reservePrice}
                                    onChange={e => handleOnChange({ reservePrice: e.target.value })}
                                    maxLength={10}
                                />
                                {reservePriceValidationMessage ? (
                                    <>
                                        <lable className='validation-label'>{reservePriceValidationMessage}</lable>
                                        <br />
                                    </>
                                ) : null}

                                <br />
                                {buttonSection}
                            </div>
                        </div>
                    </div>
                    
                    {/* Preview section of file start */}
                    <div class="col-xl-6 col-lg-12" style={{ height: "400px" }}>
                        <label><b>Preview</b></label>
                        <div class="card" style={{ alignItems: 'center', justifyContent: 'center' }}>
                            {imageUrl ? <Avatar uri={imageUrl} style={{ height: '300px', width: '300px' }} /> : <label>Prevlew of collection</label>}
                        </div>
                    </div>
                    {/* Preview section of file end */}
                </div>

            </div>
        </div>
    )
}

export default FormComponent
