# DNS Migration Guide: Netlify → GitHub Pages

## Current Status
- ✅ GitHub Pages deployment successful
- ✅ Site live at: https://adysun-ventures.github.io/adysunventures.com/
- ⚠️ Custom domain `adysunventures.com` still pointing to Netlify

## Step-by-Step Migration

### 1. Release Domain from Netlify
1. Login to Netlify: https://app.netlify.com
2. Go to **Team Settings** → **Domains**
3. Find `adysunventures.com`
4. Click **"Remove domain"** or **"Release domain"**
5. Confirm removal

### 2. Update DNS Records at Domain Registrar

**Where to update:** Login to your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.)

**Remove these OLD Netlify records:**
```
Type: A or CNAME pointing to Netlify
```

**Add these NEW GitHub Pages records:**

#### A Records (IPv4)
```
Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.108.153
TTL: 3600 (or Auto)

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

#### CNAME Record (for www subdomain)
```
Type: CNAME
Name: www
Value: adysun-ventures.github.io
TTL: 3600
```

### 3. Wait for DNS Propagation
- Minimum wait: 15-30 minutes
- Maximum wait: 48 hours
- Check status: https://dnschecker.org/#A/adysunventures.com

### 4. Add Custom Domain to GitHub Pages

**After DNS propagates:**

1. Go to: https://github.com/Adysun-Ventures/adysunventures.com/settings/pages
2. Under **"Custom domain"**, enter: `adysunventures.com`
3. Click **Save**
4. Wait for DNS check (green checkmark)
5. Enable **"Enforce HTTPS"**

### 5. Create CNAME File (Already Done)

A `CNAME` file should be in your `public/` directory:
```
adysunventures.com
```

This tells GitHub Pages which custom domain to use.

## Verification Steps

### Check DNS Records
```bash
# Check A records
dig adysunventures.com A

# Should show GitHub Pages IPs:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153

# Check CNAME for www
dig www.adysunventures.com CNAME

# Should show: adysun-ventures.github.io
```

### Check Website
```bash
# Test HTTP
curl -I http://adysunventures.com

# Test HTTPS (after enabling)
curl -I https://adysunventures.com
```

## Troubleshooting

### "Domain already taken" error
- Domain is still claimed by Netlify
- Wait 24 hours after removing from Netlify
- Contact GitHub Support if issue persists

### DNS not propagating
- Clear your browser cache
- Try incognito/private mode
- Use different DNS checker: https://www.whatsmydns.net/

### HTTPS not working
- Wait for DNS to fully propagate
- GitHub needs to provision SSL certificate (can take 24 hours)
- Make sure "Enforce HTTPS" is enabled in GitHub Pages settings

## Expected Timeline

| Step | Duration |
|------|----------|
| Remove from Netlify | Immediate |
| Update DNS records | 5 minutes |
| DNS propagation | 15 min - 48 hours |
| Add to GitHub Pages | 5 minutes |
| SSL certificate provisioning | 1-24 hours |

## Final URLs

After migration:
- **Primary:** https://adysunventures.com
- **WWW:** https://www.adysunventures.com (redirects to primary)
- **GitHub Pages:** https://adysun-ventures.github.io/adysunventures.com/ (still works)

## Support Resources

- GitHub Pages Docs: https://docs.github.com/pages
- DNS Checker: https://dnschecker.org
- GitHub Pages Custom Domain: https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site
