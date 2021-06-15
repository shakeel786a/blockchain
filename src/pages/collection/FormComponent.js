import React, { useEffect, useState } from 'react'

import { Avatar, Button, EditorComponent, FileDropSection, Text, ValidationTextComponent } from '../../commonPages'
import { validation } from './formUtility'
import { DateTimePicker } from '../../commonPages'

function FormComponent(props) {
    const { isLoading, isFileUploadLoading, uploadedFile, selectedItem, onSelectFile, onClickFormSubmit } = props
    const [properties, setProperties] = useState([{ Key: '', Value: '' }])
    const [formInfo, setFormInfo] = useState({})
    const [validationMessage, setValidationMessage] = useState({})
    const [editorValue, setEditorValue] = useState(null)
    const [isDisableFile, setIsDisableFile] = useState(false)

    const { imageOrVideo, nftName, startingPrice, reservePrice, startTime, protectionTime, endTime, additionalPrice, physcicalArtworkIsAvailable, status, step } = formInfo || {}
    const {
        fileValidationMessage,
        nameValidationMessage,
        startingPriceValidationMessage,
        reservePriceValidationMessage,
        aucationStartTimeValidationMessage,
        protectionTimeValidationMessage,
        physicalArtworkValidationMessage,
        additionalPriceValidationMessage,
        aucationEndTimeValidationMessage,
        stepValidationMessage,
        statusValidationMessage
    } = validationMessage || {}

    console.log('selectedItem=========formInfo=================', selectedItem, formInfo)

    useEffect(() => {
        if (selectedItem && Object.keys(selectedItem) && Object.keys(selectedItem).length) {
            setIsDisableFile(true)
            setFormInfo({ ...selectedItem })
        } else {
            setFormInfo({ dateTime: new Date() })
        }
    }, [selectedItem])

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
        handleOnChange({ imageOrVideo: uploadedFile || undefined })
    }, [uploadedFile])

    const handleOnSelectFile = ({ file }) => onSelectFile(file)

    const onChangeDate = (dateTime, key) => {
        handleOnChange({ [key]: dateTime })
    }

    const handleOnChange = info => {
        setFormInfo({ ...formInfo, ...info })
    }

    const onClickSubmit = () => {
        const { status, formValidationMessage } = validation(formInfo)
        setValidationMessage(formValidationMessage)
        if (status) {
            onClickFormSubmit({ ...formInfo, shortDescription: editorValue || '' })
        }
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
                                    <FileDropSection name="Choose File" formatText="PNG, GIF, JPG" selectedFile={handleOnSelectFile} isLoading={isFileUploadLoading} isDisable={isDisableFile} />
                                </div>
                                <ValidationTextComponent validationMessage={fileValidationMessage} />
                                                                
                                <br />
                                <label><b>NFT Name</b></label>
                                <input type="text" class="form-control" placeholder="NFT name" value={nftName} onChange={e => handleOnChange({ nftName: e.target.value })} />
                                <ValidationTextComponent validationMessage={nameValidationMessage} />
                                
                                <br />
                                <label><b>Aucation Start Time</b></label>  
                                <DateTimePicker placeholder="Date and time" selectedDateTime={startTime} isShowTime onChange={dateTime => onChangeDate(dateTime, 'startTime')} />
                                <ValidationTextComponent validationMessage={aucationStartTimeValidationMessage} />

                                <br />
                                <label><b>Starting Price</b></label>
                                <Text.DecimalNumberInput
                                    class="form-control"
                                    placeholder="e.g. 10"
                                    value={startingPrice}
                                    onChange={e => handleOnChange({ startingPrice: e.target.value })}
                                    maxLength={10}
                                />
                                <ValidationTextComponent validationMessage={startingPriceValidationMessage} />

                                <br />
                                <label><b>Reserve Price</b></label>
                                <Text.DecimalNumberInput
                                    class="form-control"
                                    placeholder="e.g. 10"
                                    value={reservePrice}
                                    onChange={e => handleOnChange({ reservePrice: e.target.value })}
                                    maxLength={10}
                                />
                                <ValidationTextComponent validationMessage={reservePriceValidationMessage} />

                                <br />
                                <label><b>Protection Time</b></label>  
                                <Text.NumberInput
                                    class="form-control"
                                    placeholder="Protection time should be in minutes"
                                    value={protectionTime}
                                    onChange={e => handleOnChange({ protectionTime: e.target.value })}
                                    maxLength={5}
                                />
                                <ValidationTextComponent validationMessage={protectionTimeValidationMessage} />

                                <br />
                                <label><b>Physical Artwork</b></label>
                                <div class="form-group mb-0">
                                    <label class="radio-inline mr-3 c-pointer"><input type="radio" name="artworkGroup" onClick={e => handleOnChange({ physcicalArtworkIsAvailable: e.target.checked })} /> Yes</label>
                                    <label class="radio-inline mr-3 c-pointer"><input type="radio" name="artworkGroup" onClick={e => handleOnChange({ physcicalArtworkIsAvailable: !e.target.checked })} /> No</label>
                                </div>
                                <ValidationTextComponent validationMessage={physicalArtworkValidationMessage} />

                                {physcicalArtworkIsAvailable ? (
                                    <> 
                                        <br />
                                        <label><b>Additional Price</b></label>
                                        <Text.DecimalNumberInput
                                            class="form-control"
                                            placeholder="e.g. 10"
                                            value={additionalPrice}
                                            onChange={e => handleOnChange({ additionalPrice: e.target.value })}
                                            maxLength={10}
                                        />
                                        <ValidationTextComponent validationMessage={additionalPriceValidationMessage} />
                                    </>
                                ) : null}

                                <br />
                                <label><b>Short Description</b> (Optional)</label>
                                <EditorComponent onChange={info => setEditorValue(info)} value={editorValue || ''} />

                                <br />
                                <label><b>Aucation End Time</b></label>  
                                <DateTimePicker placeholder="Date and time" selectedDateTime={endTime} isShowTime onChange={dateTime => onChangeDate(dateTime, 'endTime')} />
                                <ValidationTextComponent validationMessage={aucationEndTimeValidationMessage} />

                                <br />
                                <label><b>Step</b></label>
                                <Text.NumberInput
                                    class="form-control"
                                    placeholder="e.g. 1"
                                    value={step}
                                    onChange={e => handleOnChange({ step: e.target.value })}
                                    maxLength={10}
                                />
                                <ValidationTextComponent validationMessage={stepValidationMessage} />

                                <br />
                                <label><b>Properties (Optional)</b></label>
                                {propertiesSection}

                                <br />
                                <label><b>Status</b></label>
                                <div class="form-group">
                                    <select class="form-control default-select" onChange={e => handleOnChange({ status: e.target.value })}>
                                        <option>Select</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                    </select>
                                </div>
                                <ValidationTextComponent validationMessage={statusValidationMessage} />

                                <br />
                                <Button isLoading={isLoading} label="Submit" onClick={onClickSubmit} />
                            </div>
                        </div>
                    </div>
                    
                    {/* Preview section of file start */}
                    <div class="col-xl-6 col-lg-12" style={{ height: "400px" }}>
                        <label><b>Preview</b></label>
                        <div class="card" style={{ alignItems: 'center', justifyContent: 'center' }}>
                            {imageOrVideo ? <Avatar uri={imageOrVideo} style={{ height: '300px', width: '300px' }} /> : <label>Prevlew of collection</label>}
                        </div>
                    </div>
                    {/* Preview section of file end */}
                </div>

            </div>
        </div>
    )
}

export default FormComponent
