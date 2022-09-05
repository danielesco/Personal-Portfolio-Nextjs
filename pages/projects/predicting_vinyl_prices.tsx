import React from 'react'
import {
    Paper, Title, Text, TypographyStylesProvider, Stack, Container, SimpleGrid,
    Space
} from '@mantine/core';

function projects() {
    return (
        <>

            <Stack>

                <Paper shadow="xs" p="md" withBorder>
                    <Title align='center'>Predicting Vinyl Prices</Title>



                    <Space h="md"></Space>
                    <Title italic order={4}>Research paper and presentation</Title>
                </Paper>


                <Paper shadow="xs" p="lg">

                    <h1>hi</h1>
                    <Title>hi</Title>

                </Paper>
            </Stack>
        </>
    )
}

export default projects