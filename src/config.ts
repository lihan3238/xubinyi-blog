import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "徐彬益",
	subtitle: "把生活、学习和公开主页放在一个更长期的地方",
	lang: "zh_CN",
	themeColor: {
		hue: 205,
		fixed: false,
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png",
		position: "center",
		credit: {
			enable: false,
			text: "",
			url: "",
		},
	},
	toc: {
		enable: true,
		depth: 2,
	},
	favicon: [],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/linyi0115",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/xubinyi-avatar.png",
	name: "徐彬益",
	bio: "武汉科技大学 2023 级，法经学院。",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/linyi0115",
		},
		{
			name: "抖音",
			icon: "fa6-brands:tiktok",
			url: "https://www.douyin.com/user/MS4wLjABAAAAiM38tsywUith2hXRB55WO7pFfekj-lIGG3w2mzhJ5qonMxDAJYVHT8N9mSnb4ulB?from_tab_name=main",
		},
		{
			name: "小红书",
			icon: "fa6-solid:book-open",
			url: "https://www.xiaohongshu.com/user/profile/5faf75150000000001006aae?xsec_token=AB_swC2eXN_XQIftSWCrxoL1fQodjSWzMkAZESDFnZAw8%3D&xsec_source=pc_search",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};
