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
				<link href="http://fonts.googleapis.com/css?family=Droid+Sans" rel="stylesheet" type="text/css"/>
				<style type="text/css">
	body {
		font-family: 'Droid Sans', sans-serif;
	}

	h1 {
		text-align: center;
		text-transform: uppercase;
		text-decoration: underline;
		font-weight: normal;
		font-size: 170%;
	}

	h2 {
		text-align: center;
		text-transform: uppercase;
		background-color: #e8e8ff;
		padding: 4px 4px 4px 4px;
		font-weight: normal;
		font-size: 150%;
	}

	a {
		color: #000080
	}

	.ident {
		font-weight: bold;
	}

	.name {
		font-size: 120%;
	}

	.first {
		font-weight: bold;
	}

	.environment-title {
		text-decoration: underline;
	}

	.environment-values {
		font-style: italic;
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
							<a class="jraf-link" href="index.html">English version</a>
						</td>
						<td>
							<a class="jraf-link" href="cv-en.pdf">English version (PDF)</a>
						</td>
						<td>
							<a class="jraf-link" href="cv-fr.html">Version française</a>
						</td>
						<td>
							<a class="jraf-link" href="cv-fr.pdf">Version française (PDF)</a>
						</td>
					</tr>
				</table>
				<hr/>

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
										</u> :
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
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
