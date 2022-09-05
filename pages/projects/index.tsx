import React from 'react'
import {
    Paper, Title, Text, TypographyStylesProvider, Stack, Container, SimpleGrid, Space,
} from '@mantine/core';

import { CardGradient } from '../../components/ProjectCards';
function projects() {
    return (
        <>

            <Stack>
                <Paper shadow="xs" p="md" withBorder>
                    <Title align='center'>Projects</Title>


                    <Space h="md"></Space>
                    <Title italic order={4}>A selection of projects that I'm proud of!</Title>
                </Paper>


                <Paper shadow="xs" p="lg">

                    <SimpleGrid cols={3}>



                        <CardGradient title='Predicting Vinyl Prices' description='Research paper and presentation on Predicting Vinyl Prices using machine learning techniques.' link_route='projects/predicting_vinyl_prices' badge='Python'></CardGradient>
                        <CardGradient title='NLP Analysis on Hip Hop Lyrics' description='' link_route='projects/nlp_hiphoplyrics' badge='Python'></CardGradient>
                        <CardGradient title='Exploring the Economic Benefits of R&D Expenditures' description='' link_route='projects/rad_expenditures_analysis' badge='STATA'></CardGradient>
                        <CardGradient title='Case Study: Customer Retention' description='' link_route='projects/customer_retention' badge='Python'></CardGradient>




                    </SimpleGrid>


                </Paper>
            </Stack>
        </>
    )
}

export default projects