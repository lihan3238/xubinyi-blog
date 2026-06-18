# Xubinyi Blog Server Deploy Notes

This repository is a fork-based customization of `saicaca/fuwari` for the server-hosted blog at `http://8.148.11.2/`.

The public GitHub repository intentionally does not track blog post bodies. Server-local posts live under:

```text
/opt/xubinyi-blog/src/content/posts/
```

The repository tracks template, configuration, deployment notes, and small public assets only. To publish after editing server-local posts:

```bash
cd /opt/xubinyi-blog
pnpm check
pnpm build
systemctl reload nginx
```

Nginx serves the static build output from:

```text
/opt/xubinyi-blog/dist
```
