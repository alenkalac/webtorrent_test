"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import React, { useEffect, useState } from 'react';
import TorrentClient from 'utils/torrentClient';
import WebTorrent from "webtorrent"


export default function IndexPage() {
	const [supported, setSupported] = useState(false)
	const [torrentClient, setTorrentClient] = useState(null)


	useEffect(() => {
		setTorrentClient(new WebTorrent())
	}, []);
	
	return (

		<section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">

			<div className="grid w-full max-w-sm items-center gap-1.5">
				<Label htmlFor="picture">Picture</Label>
				<Input id="picture" type="file" onChange={e => {
					if(e.target.files && e.target.files.length > 0) {
						console.log(e.target.files[0]);
						TorrentClient.sendTorrent(torrentClient,e.target.files);

					}}
				} />
			</div>
			<div className="flex gap-4">
				<Link
					href={siteConfig.links.docs}
					target="_blank"
					rel="noreferrer"
					className={buttonVariants({ size: "lg" })}
				>
					Documentation
				</Link>
				<Button onClick={() => {console.log(torrentClient)}}>Test</Button>
			</div>
		</section>
	)
}
