import { createStyles, Paper, Text, ThemeIcon, Badge, Space } from '@mantine/core';
import { IconColorSwatch } from '@tabler/icons';
import Link from 'next/link'
const useStyles = createStyles((theme) => ({
    card: {
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden',
        transition: 'transform 150ms ease, box-shadow 100ms ease',
        padding: theme.spacing.xl,
        paddingLeft: theme.spacing.xl * 2,

        '&:hover': {
            boxShadow: theme.shadows.md,
            transform: 'scale(1.02)',
        },

        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: 6,
            backgroundImage: theme.fn.linearGradient(0, theme.colors.dark[0], theme.colors.light[8]),
        },
    },
}));

interface CardGradientProps {
    title: string;
    description: string;
    link_route: string;
    badge: string;
}

export function CardGradient({ title, description, link_route, badge }: CardGradientProps) {
    const { classes } = useStyles();
    return (
        <Link href={`/${link_route}`}>
            <Paper withBorder radius="md" className={classes.card}>
                <ThemeIcon
                    size="xl"
                    radius="md"
                    color="gray"
                    variant='light'
                >
                    <IconColorSwatch size={28} stroke={1.5} />
                </ThemeIcon>
                <Text size="xl" weight={500} mt="md">
                    {title}
                </Text>
                <Text size="sm" mt="sm" color="dimmed">
                    {description}
                </Text>
                <Space h="md"></Space>
                <Badge size='sm' color="gray">{badge}</Badge>
            </Paper>
        </Link>
    );
}