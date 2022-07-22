import { View, Flex, TextArea, Button, DialogTrigger, Dialog, Divider , ActionButton, Heading, Content, Text, Picker, Item} from '@adobe/react-spectrum'
import { useState} from 'react'
import axios from 'axios'

export const PayloadConfig = () => {

    const [input, setinput] = useState('')
    const [output, setOutput] = useState('')
    const [mode, setMode] = useState('Summarize')

    const handleClick = async () => {
        // api call handled in here
        switch (mode) {
            case 'Summarize':
                // make call to the summmarizer
                axios.get('https://catfact.ninja/fact')
                    .then(res => setOutput(res.data.fact))
                    .catch(err => console.log(err))
            case 'Get Phrases':
                // make call to the n-grams
                setOutput(input.split('').reverse().join(''))
        }   
    }

    return(
        <View height='100%' backgroundColor='gray-200' padding='size-200' marginBottom='size-200'>
            <View height='100%' backgroundColor='gray-50' borderRadius='large'> 
                <Flex direction='column' height='100%' margin='size-200'>
                    <Flex direction='row' justifyContent='space-between' alignContent='center'>
                        <h2>Payload</h2>

                        <DialogTrigger type="popover">
                            <ActionButton alignSelf='center'>Settings</ActionButton>
                            <Dialog>
                                <Heading>Settings</Heading>
                                <Divider />
                                <Content>
                                    <Flex justifyContent='space-between'>
                                    <Text>Mode</Text>
                                    <select style={{'width': '150px'}} defaultValue={mode} onChange={(e) => {
                                        setMode(e.target.value)
                                    }}>
                                        <option id='summarize'>Summarize</option>
                                        <option id='phrases'>Get Phrases</option>
                                    </select>
                                    </Flex>
                                </Content>
                            </Dialog>
                        </DialogTrigger>
                        
                    </Flex>
                    
                    <Flex direction='row' height='100%' marginBottom='size-200'>
                        <TextArea 
                            width='50%' 
                            placeholder='Input'
                            value={input}
                            onChange={setinput}
                        />
                        <TextArea 
                            width='50%' 
                            isReadOnly={true}
                            placeholder='Output will appear here.'
                            value={output}
                        />
                    </Flex>
                    <Flex direction='row' justifyContent='end' marginBottom='size-200'>
                        <Button variant='cta'
                            onPress={handleClick}
                        >
                            {mode}
                        </Button>
                        
                    </Flex>
                </Flex>
            </View>
        </View>
    )
} 

export default PayloadConfig;