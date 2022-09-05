import React from 'react'

import {
    Paper, Title, Text, TypographyStylesProvider, Container, Stack,
    Space, Divider
} from '@mantine/core';
function about() {
    return (
        <>
            <Stack>
                <Paper shadow="xs" p="md" withBorder>
                    <Title align='center'>About Me</Title>
                    <Space h="md"></Space>
                    <Title italic order={4}>A little more about me and this website.</Title>

                </Paper>


                <Paper shadow="xs" p="lg">
                    <Space h="xs"></Space>
                    <Text>Welcome to my website. Please feel free to read more about me, or you can check out my resume, projects, view site statistics, or contact me.
                        Source available here.
                    </Text>
                    <Space h="lg"></Space>
                    <Divider size="md"></Divider>

                </Paper>
            </Stack>
        </>
    )
}

export default about