// import Head from 'next/head'
import { Flex, Button, Text, Image } from '@chakra-ui/core'
import { FormEvent, useState } from 'react'
import Input from '../components/Input'
import axios from 'axios'

export default function Home() {
  const [email, setEmail] = useState('');



  function handleSignUpToNewsletter(event: FormEvent){
    event.preventDefault();
    axios.post('/api/subscribe', {email});

  };

  return (
    <Flex
      as="main"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        as="form"
        onSubmit={handleSignUpToNewsletter}
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={8}
        marginTop={4}
        width="100%"
        maxW="400px"
      >
        <Image marginBottom={10}
         width="300px"
         src="https://i.imgur.com/qRK2zD0.jpg"  />

        <Text textAlign="center" fontSize="sm" color="gray.400" marginBottom={2}>
          Assine a newsletter da play e receba os melhores conteúdos sobre programação!
      </Text>

        <Input
          placeholder="Seu melhor e-mail"
          marginTop={2}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Button
          type="submit"
          backgroundColor="#17CFCF"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: '#00FAFA' }}
        >
          INSCREVER
      </Button>
      </Flex>
    </Flex>
  )
}
