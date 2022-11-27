<?xml version="1.0" encoding="utf-8"?><!-- ééééééééééééééééé -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml">
	<!--xsl:namespace-alias stylesheet-prefix="html" result-prefix="#default"/-->

	<xsl:output method="xml" indent="no" doctype-public="-//W3C//DTD XHTML 1.0 Transitional//EN" doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" encoding="utf-8"/>
	<xsl:template match="/">
		<html xml:lang="fr" lang="fr">
			<xsl:comment>Last modification:
				<xsl:value-of select="//meta/last-modification"/>&#160;
			</xsl:comment>
			<head>
				<meta http-equiv="Content-Type" content="text/xhtml; charset=utf-8"/>
				<link href="https://fonts.googleapis.com/css?family=Roboto:regular,medium,thin,light,italic,mediumitalic,thinitalic,lightitalic" rel="stylesheet" type="text/css"/>
				<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet" type="text/css"/>
				<style type="text/css">
	body {
		font-family: Roboto, sans-serif;
		font-weight: 300;
	}

	#main {
		width: 800px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 100px;
	}

	h1 {
		text-align: center;
		text-transform: uppercase;
		text-decoration: underline;
		font-weight: 300;
		font-size: 170%;
	}

	h2 {
		text-align: center;
		text-transform: uppercase;
		background-color: #e8e8ff;
		padding: 4px 4px 4px 4px;
		font-weight: 300;
		font-size: 150%;
	}

	a {
		color: #000080
	}

	.ident {
		font-weight: 400;
	}

	.name {
		font-size: 120%;
	}

	.first {
		font-weight: 400;
	}

	.environment-title {
		text-decoration: underline;
	}

	.environment-values {
		font-style: italic;
	}

	.company-details {
		font-family: 'Roboto Condensed', sans-serif;
		color: #B0B0B0;
	}

	.jraf-link {
		font-family: Verdana, Helvetica, Arial, sans-serif;
		font-size: 10pt;
		color: green;
	}

	a.jraf-link:hover {
		color: black;
		background: #f6f6f6;
	}


				</style>
				<title>
					<xsl:value-of select="//document-title"/>
				</title>
			</head>
			<body>
				<table width="100%">
					<tr>
						<td>
							<a class="jraf-link" href="..">Home</a>
						</td>
					</tr>
					<tr>
						<td>
							<a class="jraf-link" href="index.html">English</a>
							&#160;
							&#160;
							<a class="jraf-link" href="benoit-lubek-resume-en.pdf">PDF</a>
							&#160;
							&#160;
							<a class="jraf-link" href="http://server.jraf.org:4000/?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEAVACwEsBnHUnOATxwCcET4EAaHAQzLZwHFa2AHAgEUAMjgCCABQCSAOgA6SXACEEUNjBIIcAdwI0kEFAH5FuQtpIQYtKNqgQw2imwBubIgBs2AI0-aCBHp0MxwCFBR%2BEnQAehiAcyIUAhgfWQc4GOUIABEY3gFhEQBaACUGJjNQgFEkACsIKgBCRUUARxggmnLGRAAKABJvJHiYNniEdBwRNhGxiaaAShxgRRxKBBQuVaR19e8SFABZRyIAMyIEMDWcAF8b%2Bl6EPuHR8cmcIdm3ieWdvfITlQSRo-wBOAutEOADk2IgbgCDihYfDduCfERaMkcmwUAgEXt3gT1khcUQIKTPCDiTgEHAPJ4aYIKQhofAfEEVjT1g4YKhaFQAMKOfFo8E4JDsoI0%2B5iwlgMCPMhg8VsBVKkREJAMGUE2UAhAAD34QUuSDsXLl6xNtHJYEt4vWhzYWIdjvWYFxovd%2BsdyHtKsdnrx3LuuqtOAaPjwSX8NIgtHisyIAC8yRS3eLSaj3U4SFBbfwUOSkKHPNB06WI%2BsdAgfCQkt7HXAEwhpEgzhBw%2BLG3BlaG8wWiEWS93wchXJiKYhUHqCVcYOpixnAx6EPF6E2AS36O3O0zTY4APK0ACaCBdmfBshvOAzkkPAdDTq2rtXQa9z7DVfd639V9zT9qz2X1xVA69bwzc9L3fAEqAvWhQ3A9ZkPIJBDiSGBl12WCJThLdwXLJdR2A2t60bMcUIJEgAGsvE8fsI2zAj1l7RjcwYIcRwpSjv23UgoAAnBB0LbCaSpJAaJIOc0VlWUQGYEB3FtXx-BIDAQDBeQQFeeZ8QwHBtOqaFtOYRRbhAW4gA" target="_blank">GraphQL</a>
						</td>
						<td>
							<a class="jraf-link" href="cv-fr.html">Français</a>
							&#160;
							&#160;
							<a class="jraf-link" href="benoit-lubek-cv-fr.pdf">PDF</a>
							&#160;
							&#160;
							<a class="jraf-link" href="http://server.jraf.org:4000/?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIAEA1CASykJzgiRwGE8cBnCGOnAGwEMcAzCAJ0RzAByGEgQ4AggAUAkjgDiPNgAcAFgEUAMgDoAOklyS2PKGICOMMUsY9zRHErZ0A-HtwaxUCGDEMYxsQh0KAKEdFZIhABGLGLEpOiuOCooKEp06AD0GQDmhCgqMJFannAZAEIQACIZCsrqGgC0AEqB8AiuieJwTAgAXg0AbozMkYTIOACEenrmCDwAnjgtdG0AFAAk7EjZMGzZCOg4Gmzbu-sTAJQ4wHo4ZAgoHDeUd6yOKACyXoScY2C3OAAvgCeK1EKstjs9gccJsTlD9ldnq8cIRvKg8otkSiuIQeEEAHJsRAAlHsQnE9ovFGjHj5SpsFBUnE4aGk15IRmEChsFiY9l3BBwNiEFgC%2BwqCgIAnwSJza7iu6eEQoBZULzMlk4JCyubi4HU15sMBgUF0ZjYlnG02BOgaQiiOj69kGlEIAAeSjmYyQJgVhruXp43LA-q19EedLD4YEjM1LNdWuQoctWrAccVQOdAZwACsIJEACp5GLi3jZE6EXpcijRlmckk5u7eOhQYNKFDcpCZljQGvdps4ADuCEidDy8Zx5FB0iQ3GzLIncAtmZbbcIHa7C5xyAGeIoiFQLvZCDAMCg-brr282VBk7u04Qs-nOaDIYA8jwAJoIIxXlFaIBOC1pI3peP%2BOJBEYwSpuG6ZMpmdwGohODJhBLLwfeOKJgmmaAVowGUD%2Bf6wTi8y-jwmY4a81F3A6QR5DAna1qRdwNlhdy9hezEDuGI5jhO25IeydAANaiiwK45ux4pLlJcGBOum4UEJWaGnAoRQBBa7tjx4p8kgolOoaiYGgaIAADQgAMRiEGw0SBBgIDYjoICQmc7QYDgrkAGJNK5Fl6ICICAkAA" target="_blank">GraphQL</a>
						</td>
					</tr>
				</table>
				<hr/>
				<div id="main">

				<table width="100%">
					<tr>
						<td>
								<span class="ident">
									<span class="name">
										<xsl:value-of select="//first-name"/>
										<xsl:text> </xsl:text>
										<xsl:value-of select="//last-name"/>
									</span>
									<br/>
									<xsl:for-each select="//contact/address/line">
										<xsl:value-of select="."/>
										<xsl:if test="position() != last()">
											<br/>
										</xsl:if>
									</xsl:for-each>
								</span>
								<xsl:for-each select="//contact/other">
									<br/>
									<xsl:copy-of select="node()"/>
								</xsl:for-each>
						</td>
						<td align="right">
							<xsl:value-of select="//contact/phone"/><br/>
							<a>
								<xsl:attribute name="href">mailto:
									<xsl:value-of select="//contact/email"/>
								</xsl:attribute>
								<xsl:value-of select="//contact/email"/>
							</a>
							<br/>
							<a>
								<xsl:attribute name="href">http://
									<xsl:value-of select="//contact/web"/>/
								</xsl:attribute>
								<xsl:attribute name="target">_blank</xsl:attribute>
								<xsl:value-of select="//contact/web"/>
							</a>
						</td>
					</tr>
				</table>

				<h1>
					<xsl:value-of select="//head/title"/>
				</h1>

				<h2><xsl:value-of select="//meta/translation/experience"/></h2>
				<table>
					<xsl:for-each select="//experience/period">
						<xsl:for-each select="item">
							<tr>
								<xsl:choose>
									<xsl:when test="position() = 1">
										<td nowrap="nowrap" valign="baseline" width="8%">
											<xsl:choose>
												<xsl:when test="../@to = 'NOW'"><xsl:value-of select="//meta/translation/now"/>&#160;</xsl:when>
												<xsl:otherwise>
													<xsl:value-of select="../@to"/>
												</xsl:otherwise>
											</xsl:choose>
										</td>
										<td/>
										<td class="first">
											<xsl:copy-of select="node()"/>
										</td>
									</xsl:when>
									<xsl:when test="position() = 2">
										<td nowrap="nowrap" valign="baseline" width="8%">
											<xsl:value-of select="../@from"/>
										</td>
										<td valign="baseline">&#160;.&#160;</td>
										<td>
											<xsl:copy-of select="node()"/>
										</td>
									</xsl:when>
									<xsl:otherwise>
										<td/>
										<td valign="baseline">&#160;.&#160;</td>
										<td>
											<xsl:copy-of select="node()"/>
										</td>
									</xsl:otherwise>
								</xsl:choose>
							</tr>
						</xsl:for-each>
						<tr>
							<td nowrap="nowrap" valign="baseline" width="8%"/>
							<td/>
							<td><span class="environment-title"><xsl:value-of select="//meta/translation/environment"/></span><xsl:value-of select="//meta/translation/colon"/>&#160;<span class="environment-values"><xsl:value-of select="environment"/></span></td>
						</tr>
						<tr>
							<td>&#160;</td>
							<td/>
							<td/>
						</tr>
					</xsl:for-each>
				</table>
				<xsl:for-each select="//experience/other">
					<xsl:copy-of select="node()"/>
					<br/>
				</xsl:for-each>
				<br/>
				<br/>
				<h2><xsl:value-of select="//meta/translation/skills"/></h2>
				<xsl:for-each select="//skills/category">
					<table>
						<xsl:for-each select="item">
							<tr>
								<td>
									<xsl:if test="position() = 1">
										<u>
											<xsl:value-of select="../@name"/>
										</u><xsl:value-of select="//meta/translation/colon"/>&#160;
									</xsl:if>
								</td>
								<td>
									<xsl:copy-of select="node()"/>
								</td>
							</tr>
						</xsl:for-each>
					</table>
					<br/>
				</xsl:for-each>
				<br/>
				<br/>
				<h2><xsl:value-of select="//meta/translation/education"/></h2>
				<table>
					<xsl:for-each select="//education/period">
						<xsl:for-each select="item">
							<tr>
								<td nowrap="nowrap" valign="baseline" align="right">
									<xsl:if test="position() = 1">
										<xsl:value-of select="../@from"/>
										<xsl:choose>
											<xsl:when test="../@to"> - <xsl:value-of select="../@to"/></xsl:when>
										</xsl:choose>
									</xsl:if>
								</td>
								<td valign="baseline">
									&#160;.&#160;</td>
								<td>
									<xsl:copy-of select="node()"/>
								</td>
							</tr>
						</xsl:for-each>
						<tr>
							<td>&#160;</td>
							<td/>
							<td/>
						</tr>
					</xsl:for-each>
				</table>
				<xsl:for-each select="//education/other">
					<xsl:copy-of select="node()"/>
					<br/>
				</xsl:for-each>
				<br/>
				<br/>
				<br/>
				<h2><xsl:value-of select="//meta/translation/misc"/></h2>
				<xsl:for-each select="//misc/item">
					<xsl:copy-of select="node()"/>
					<br/>
				</xsl:for-each>

				</div>

			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
