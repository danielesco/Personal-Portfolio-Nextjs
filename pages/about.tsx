import React from 'react'

import {
    Paper, Title, Text, TypographyStylesProvider, Container, Stack,
    Space
} from '@mantine/core';
function about() {
    return (
        <>
            <Stack>
                <Paper shadow="xs" p="md" withBorder>
                    <Title align='center'>About Me</Title>
                    <Space h="lg"></Space>
                    <Text>
                        A beautiful, responsive, statically-generated, React application written with modern Javascript and Python.
                    </Text>
                </Paper>


                <Paper shadow="xs" p="lg">
                    <TypographyStylesProvider>
                        <div dangerouslySetInnerHTML={{ __html: '<p> Welcome to my website. Please feel free to read more about me, or you can check out my resume, projects, view site statistics, or contact me.</p>' }} />
                    </TypographyStylesProvider>

                </Paper>
            </Stack>
        </>
    )
}

export default about