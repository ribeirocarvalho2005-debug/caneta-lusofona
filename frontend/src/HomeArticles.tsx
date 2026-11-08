import { Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";

import { HomeArticle } from "./Model";

interface HomeArticlesProps {
    articles: HomeArticle[];
}

export default function HomeArticles({ articles }: HomeArticlesProps) {
    if (articles.length === 0) {
        return (
            <section className="articles-section" aria-labelledby="articles-title">
                <Typography className="articles-empty" color="text.secondary">
                    No articles have been published yet.
                </Typography>
            </section>
        );
    }

    return (
        <section className="articles-section" aria-labelledby="articles-title">
            <div className="articles-heading">
                <div>
                    <Typography className="articles-eyebrow" component="p">
                        Featured
                    </Typography>
                    <Typography className="articles-title" component="h2" id="articles-title">
                        Articles and news
                    </Typography>
                </div>
                <Typography className="articles-description" component="p">
                    Stories, ideas, and events from the Lusophone community.
                </Typography>
            </div>

            <div className="articles-grid">
                {articles.map((article) => (
                    <Card className="article-card" elevation={0} key={article.id}>
                        <CardMedia
                            component="img"
                            image={article.image}
                            alt={article.imageAlt}
                            className="article-image"
                            loading="lazy"
                        />
                        <CardContent className="article-content">
                            <div className="article-meta">
                                <Typography className="article-date" component="time">
                                    {article.date}
                                </Typography>
                                <Chip className="article-category" label={article.category} size="small" />
                            </div>
                            <Typography className="article-card-title" component="h3">
                                {article.title}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
