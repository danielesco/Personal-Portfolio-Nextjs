import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {
  Paper, Title, Text, TypographyStylesProvider, Stack,
  Space,
  Container,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { ThemeContext } from '@emotion/react';



const Home: NextPage = () => {
  const theme = useMantineTheme()
  return (

    <Stack >
      <Head> <title>Daniel Escobar's Personal Portfolio</title></Head>
      <Paper shadow="xs" p="md" withBorder >
        <Title align='center' lineClamp={2}>Daniel Escobar's Personal Portfolio</Title>
        <Space h="lg"></Space>
        <Text italic>
          A beautiful, responsive, statically-generated, react application written with modern Javascript and Python.
        </Text>

      </Paper>


      <Paper shadow="xs" p="md">
        <TypographyStylesProvider>
          <p> Welcome to my website. Please feel free to read more about me, or you can check out my resume, projects, view site statistics, or contact me.</p>
        </TypographyStylesProvider>

      </Paper>

    </Stack>

  )
}

export default Home
