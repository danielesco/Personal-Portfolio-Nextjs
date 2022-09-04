import React from 'react'
import { Paper, Title, Text, TypographyStylesProvider, Stack, Container, SimpleGrid } from '@mantine/core';
function projects() {
    return (
        <>

            <Stack>
                <Paper shadow="xs" p="md" withBorder>
                    <Title align='center'>Projects</Title>

                    <Text>
                        A selection of projects that I'm not ashamed to show off
                    </Text>
                </Paper>


                <Paper shadow="xs" p="lg">

                    <SimpleGrid cols={3}>
                        {/* <ArticleCardFooter image='cool.jpg' category='Python' title='NLP analysis og Hip Hop Lyrics' link_route='first' footer='August 20th, 2020' author={{ name: "", description: "", image: "" }}></ArticleCardFooter>
                        <ArticleCardFooter image='cool.jpg' category='Python' title='NLP analysis og Hip Hop Lyrics' link_route='second' footer='August 20th, 2020' author={{ name: "", description: "", image: "" }}></ArticleCardFooter> */}


                    </SimpleGrid>


                </Paper>
            </Stack>
        </>
    )
}

export default projects